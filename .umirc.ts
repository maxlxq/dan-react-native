import { defineConfig, IConfig } from 'dumi';

export default defineConfig({
  title: 'dan-react-native',
  mode: 'site',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  base: '/dan-react-native',
  publicPath: '/',
  exportStatic: {},
  hash: false,
  styles: ['a[title=站长统计] { display: none; }'],
  metas: [
    {
      name: 'keywords',
      content: 'dan, react-native, dan-react-native',
    },
    {
      name: 'description',
      content: '轻量、可靠的 React Native 组件库',
    },
  ],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/maxlxq/dan-react-native',
    },
  ]
  // more config: https://d.umijs.org/config
} as IConfig);
