import * as cdk from "@aws-cdk/core";
import { NextJSLambdaEdge } from "@sls-next/cdk-construct";

export class NextStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new NextJSLambdaEdge(this, "NextAppTestStackApp", {
      serverlessBuildOutDir: "./build",
    });
  }
}
