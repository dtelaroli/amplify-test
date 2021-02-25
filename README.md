# Amplify test

POC of using AWS [Amplify Framework](https://docs.amplify.aws)

The serverless backend is in [folder](./amplify/backend).

Front-end is in [folder](./src).

## Tech

- [Amplify](https://docs.amplify.aws)
- [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [ElasticSearch Service](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/what-is-amazon-elasticsearch-service.html)
- [AppSync](https://docs.aws.amazon.com/appsync/latest/devguide/what-is-amplify.html)
- [Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
- [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [S3](https://docs.aws.amazon.com/AmazonS3/latest/dev-retired/Welcome.html)
- [NodeJS](https://nodejs.org/docs/latest-v12.x/api/synopsis.html)
- [GraphQL](https://graphql.org/code/#javascript)
- [React](https://pt-br.reactjs.org/docs/getting-started.html)

## Installation

```
npm install -g @aws-amplify/cli
```

## Configuration

_Using CLI_

```
amplify configure
```

_Using aws-vault_

```
aws-vault exec <profile-name> --
```

## New project

```
# press enter for the default options
amplify init
```

Project created at AWS Console

![amplify app](./docs/images/amplify-app.png)

## Add new API

```
amplify add api
# for auth choose: Cognito Authentication, Default Configuration, Username and No, I am done.
# for api choose: No, I am done, N, Fine grained permission with fields and N
```

Go to ./amplify/backend/auth/amplifytest<hash>/amplifytest<hash>-cloudformation-template.yml

Add default attributes to Cognito, you can't change after creation.

```
Schema:

  -
    Name: email
    Required: true
    Mutable: true
  -
    Name: phone_number
    Required: true
    Mutable: true
  -
    Name: preferred_username
    Required: false
    Mutable: true
```

Go to ./amplify/backend/api/amplifytest/schema.graphql

Change schema model fiting your way

## Manual deployment

```
amplify push
```

## Mock

Easy local running with Amplify Mock

```
amplify mock
```

## Add storage

```
amplify add storage
```

## Function

```
amplify add function
```

## Frontend

https://docs.amplify.aws/start/getting-started/setup/q/integration/react

Create a React App

```
yarn add create-react-app --dev
npx create-react-app app
```

### Configure amplify

Add to ./src/App.js

```
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
Amplify.configure(awsExports)
```

### Add Authenticator plugin

Add to ./src/App.js

```
import { withAuthenticator } from '@aws-amplify/ui-react'
```

### Storage Images

```
<AmplifyS3Image imgKey="profile.png" level="private" />
<AmplifyS3ImagePicker fileToKey="profile.png" level="private" track={true} />
```

### Add hosting

```
amplify add hosting
```

### Manual Deployment

```
amplify publish
```

## Continuous delivery

Configure via AWS console.

## Limitations

Amplify mock [does not support](https://github.com/aws-amplify/amplify-cli/issues/5981) @searchable decorator. You can remove annotation for while or use it directly in aws (omg aws!)
