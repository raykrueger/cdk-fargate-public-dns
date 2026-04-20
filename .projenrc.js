const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ray Krueger',
  authorAddress: 'raykrueger@gmail.com',
  cdkVersion: '2.250.0',
  defaultReleaseBranch: 'main',
  name: '@raykrueger/cdk-fargate-public-dns',
  repositoryUrl: 'https://github.com/raykrueger/cdk-fargate-public-dns.git',
  description: 'An AWS CDK module that listens for ECS Tasks to enter RUNNING state and then updates a Route 53 hosted zone with the public IP address attached to the task.',
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
  minNodeVersion: '24.0.0',
  catalog: {
    announce: false,
    twitter: 'raykrueger',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@types/prettier@2.6.0',
  ], /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
