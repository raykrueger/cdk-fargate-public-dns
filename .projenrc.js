const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ray Krueger',
  authorAddress: 'raykrueger@gmail.com',
  cdkVersion: '2.12.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-fargate-public-dns',
  repositoryUrl: 'https://github.com/raykrueger/cdk-fargate-public-dns.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();