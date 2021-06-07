#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { baseStack } from '../lib/index';

const app = new cdk.App();
new baseStack(app, 'baseStack', {});
//new s3Stack(app, s3Stack, {});

