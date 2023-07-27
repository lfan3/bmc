import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'sbc',
  },
  npmClient: 'tnpm',
  proxy: {
    '/panorama': {
      // target: 'http://mocks.alibaba-inc.com/mock/DSIntelligenceMock',
      target: 'https://oneapi.alibaba-inc.com/mock/data-security-manager',
      // target:'30.196.65.254:7001',
      changeOrigin: true,
    },
    '/user': {
      target: 'https://mocks.alibaba-inc.com/mock/dsm',
      // target: '30.196.65.254:7001',
      changeOrigin: true,
    },
  },
  // apiParser: {},
  // resolve: {
  //   // 配置入口文件路径，API 解析将从这里开始
  //   entryFile: './src/index.tsx',
  // },
});
