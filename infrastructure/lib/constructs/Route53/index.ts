import { HostedZone, IHostedZone } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

import { domain_name } from "../../../../config.json";

export class Route53 extends Construct {
  public readonly hosted_zone: IHostedZone;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.hosted_zone = HostedZone.fromLookup(this, "HostedZone", {
      domainName: domain_name,
    });
  }
}
