import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: 'ui-lib',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // optimization: {
  //   minimize: true,
  // },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new TsconfigPathsPlugin(),
    new webpack.container.ModuleFederationPlugin({
      name: '@lembrador-extensions/ui',
      library: { type: 'commonjs' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Components': './src/components',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'styled-components': { singleton: true },
      },
    }),
  ],
};
