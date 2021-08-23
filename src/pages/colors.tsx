import { Box, Flex, ThemeUIStyleObject, Select, Input } from 'theme-ui';
import { useState } from 'react';
import chroma from 'chroma-js';

const B = [
  '#3D8E33',
  '#FFC61E',
  '#CE1025',
  '#3A75C4',
  '#1E5F73',
  //'#7F7F7F',
  '#747B7F',
];

const defaultPick = [1,2,4,7];
const defaultPickStr = JSON.stringify(defaultPick).replace(/(^\[)|(\]$)/g, '');
let nColors = 10;
function makeSet(c: string, mode: string, pick?: number[]): string[] {
  // 0 [*1 2 3 *4 5 6 *7] 8
  // 0 *1 2 3 *4 5 *6 7 *8 9 10 *11 12
  // 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20
  //     *     *        *           *           *        *     *
  let s = chroma
    .scale(['white', c, 'black'])
    .mode(mode as any)
    .colors(nColors * 2 + 1);
  pick ??= defaultPick;
  return [s.length >> 1].concat(
    pick,
    pick.map(x => s.length - 1 - x).reverse()
  ).map(x => s[x]);
}

function objify(arr: string[][]) {
  return {
    primary: arr[0],
    secondary: arr[3],
    tertiary: arr[1],
    accent: arr[4],
    complement: arr[2],
    gray: arr[5],
  };
}

export const getColors = (mode: string, pick?: number[]) => objify(B.map(c => makeSet(c, mode, pick)));

const stylesAll: ThemeUIStyleObject = { position: 'absolute' };
const ColorBox = ({ colors, left, top, name }: any) => {
  let columns = (colors.length - 1) >> 1;
  let cstart = [100 / (columns + 2)];
  for (let i = 1; i < columns; ++i) {
    cstart[i] = cstart[i - 1] + cstart[0];
  }
  let lp = cstart.map(x => x + '%');
  let boxes = [];
  Object.assign(stylesAll, { width: lp[0], top: lp[0], bottom: '50%' });
  for (let i = 0; i < columns; ++i) {
    boxes.push(
      <Box sx={{ left: lp[i], bg: colors[i+1], ...stylesAll }}>
        L{columns - i}
      </Box>
    );
  }
  Object.assign(stylesAll, { top: '50%', bottom: lp[0] });
  for (let i = 0; i < columns; ++i) {
    boxes.push(
      <Box sx={{ left: lp[i], bg: colors[colors.length - (i+1)], ...stylesAll }}>
        D{columns - i}
      </Box>
    );
  }
  return (
    <Box sx={{
        display: 'inline-block',
        position: 'relative',
        left,
        top,
        bg: colors[0],
        color: 'white',
        width: '300px',
        height: '300px'}}>
      {name}
      {boxes}
    </Box>
  );
};

function parsePick(p: string): number[] | undefined {
  try {
    let x = JSON.parse(`[${p}]`) as number[];
    if (x.length < 2 || x.length > 5) { return; }
    if (x.some(y => typeof y !== 'number' || !Number.isInteger(y) || y < 0 || y > nColors - 1)) { return; }
    return x;
  } catch {
  }
}

let pick = defaultPick;
export default () => {
  let [colors, setColors] = useState(getColors('rgb'));
  let sel: HTMLSelectElement;
  return (<>
    <Box>
      <ColorBox colors={colors.accent} name="accent" />
      <ColorBox colors={colors.secondary} name="secondary" />
      <ColorBox colors={colors.primary} name="primary" />
      <ColorBox colors={colors.tertiary} name="tertiary" />
      <ColorBox colors={colors.complement} name="complement" />
      <ColorBox colors={colors.gray} name="gray" />
    </Box>
    <Flex sx={{flexDirection: 'row', alignItems: 'flex-start', overflow: 'auto'}}>
      <Flex sx={{flexDirection: 'column', flex: '0 0 auto', py: 1}}>
        <Flex sx={{flexDirection: 'row', width: '300px', flex: '1 0 auto'}}>
          <Box sx={{flex: '5 0 0'}}>
            <Select
              ref={r => sel = r!}
              onChange={(e) => setColors(getColors(e.currentTarget.selectedOptions[0].innerText, pick))}>
              <option selected>rgb</option>
              <option>lrgb</option>
              <option>lab</option>
              <option>lch</option>
              <option>hsl</option>
              <option>hsi</option>
            </Select>
          </Box>
          <Input
            sx={{flex: '1 0 0', order: -1}}
            defaultValue={10}
            ref={r => {
              if (!r) { return; }
              r.oninput = () => setTimeout(() => {
                if (!r.value.length) { return; }
                nColors = parseInt(r.value);
                if (isNaN(nColors)) { nColors = 10; }
                if (nColors < 1) { nColors = 1; }
                if (nColors > 100) { nColors = 100; }
                r.value = '' + nColors;
              });
            }}
          />
        </Flex>
        <Input
          sx={{width: '300px', flex: '1 0 auto'}}
          ref={r => {
            if (!r) { return; }
            r.onkeydown = e => {
              if (e.key === 'Enter') {
                pick = parsePick(r.value) ?? pick;
                setColors(getColors(sel.selectedOptions[0].innerText, pick));
                e.preventDefault();
              } else if (e.key === 'Escape') {
                r.value = defaultPickStr;
                e.preventDefault();
              }
            };
          }}
          defaultValue={defaultPickStr}></Input>
      </Flex>
      <Box sx={{
          flex: '1 1 0',
          height: '100%',
          my: 1,
          ml: 1,
          overflowY: 'scroll',
          border: '1px solid var(--theme-ui-colors-text)',
          bg: 'var(--theme-ui-colors-contentBackground'}}>
          {JSON.stringify(colors)}
      </Box>
    </Flex>
  </>);
};
