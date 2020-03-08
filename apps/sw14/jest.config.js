module.exports = {
  name: 'sw14',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw14',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
