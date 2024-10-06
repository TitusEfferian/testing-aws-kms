import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import * as kms from 'aws-cdk-lib/aws-kms'
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  // auth,
  // data,
});

// const customResourcesStack = backend.createStack('MyCustomResourcesForKMS')

// const helloWorldKey = new kms.Key(customResourcesStack,'hello world')
// helloWorldKey.addAlias('alias/foo')

// // Templated secret with username and password fields
// new secretsmanager.Secret(customResourcesStack, 'TemplatedSecret', {
//   generateSecretString: {
//     secretStringTemplate: JSON.stringify({ username: 'postgres' }),
//     generateStringKey: 'password',
//     excludeCharacters: '/@"',
//   },
// });