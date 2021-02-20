/* Amplify Params - DO NOT EDIT
    API_AMPLIFYTEST_GRAPHQLAPIENDPOINTOUTPUT
    API_AMPLIFYTEST_GRAPHQLAPIIDOUTPUT
    API_AMPLIFYTEST_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

exports.handler = (event, context) => {
    console.log(event)

    context.succeed({ id: event.arguments.id, name: '321' })
    return response;
};
