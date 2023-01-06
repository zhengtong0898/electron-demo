import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';


const config: ForgeConfig = {
  packagerConfig: {
    icon: './public/ibuprofen'
  },
  rebuildConfig: {},
  makers: [
    new MakerZIP({}, ['darwin']),
    new MakerRpm({}),
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://url/to/icon.ico',
        setupIcon: './public/icon.ico',
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './public/icon.png',
        },
      },
    },
    // {
    //   name: '@electron-forge/maker-dmg',
    //   config: {
    //     icon: './public/icon.icns',
    //   },
    // },
    // {
    //   name: '@electron-forge/maker-wix',
    //   config: {
    //     icon: './public/icon.ico',
    //   },
    // },
  ],
  plugins: [
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './dist/index.html',
            js: './dist/index.js',
            name: 'main_window',
            preload: {
              js: './dist/preload.ts',
            },
          },
        ],
      },
    }),
  ],
};

export default config;
