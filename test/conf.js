exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['index-e2e-spec.js', 'bbds-e2e-spec.js', 'gts-e2e-spec.js', 'pcs-e2e-spec.js']
};