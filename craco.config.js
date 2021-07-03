const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@config': path.resolve(__dirname, 'src/libs/config'),
      '@shared': path.resolve(__dirname, 'src/libs/shared'),
      '@forms': path.resolve(__dirname, 'src/libs/forms'),
      '@utils': path.resolve(__dirname, 'src/libs/utils'),
      '@variables': path.resolve(__dirname, 'src/libs/variables'),
      '@models': path.resolve(__dirname, 'src/libs/models'),
      '@languages': path.resolve(__dirname, 'src/libs/languages'),
      '@routing': path.resolve(__dirname, 'src/libs/routing'),

      '@hocs': path.resolve(__dirname, 'src/libs/hocs'),
      '@hooks': path.resolve(__dirname, 'src/libs/hooks'),
      '@context': path.resolve(__dirname, 'src/libs/context'),

      '@public': path.resolve(__dirname, 'src/public'),
      '@client': path.resolve(__dirname, 'src/client'),

      '@settings': path.resolve(__dirname, 'src/settings'),

      '@ui': path.resolve(__dirname, 'src/ui'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
};
