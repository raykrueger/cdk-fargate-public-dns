# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicIPSupport <a name="PublicIPSupport" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport"></a>

#### Initializers <a name="Initializers" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.Initializer"></a>

```typescript
import { PublicIPSupport } from '@raykrueger/cdk-fargate-public-dns'

new PublicIPSupport(scope: Construct, id: string, props: PublicIPSupportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.props">props</a></code> | <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps">PublicIPSupportProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.props"></a>

- *Type:* <a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps">PublicIPSupportProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupport.with">with</a></code> | Applies one or more mixins to this construct. |

---

##### `toString` <a name="toString" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.isConstruct"></a>

```typescript
import { PublicIPSupport } from '@raykrueger/cdk-fargate-public-dns'

PublicIPSupport.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### PublicIPSupportProps <a name="PublicIPSupportProps" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps"></a>

#### Initializer <a name="Initializer" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.Initializer"></a>

```typescript
import { PublicIPSupportProps } from '@raykrueger/cdk-fargate-public-dns'

const publicIPSupportProps: PublicIPSupportProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | *No description.* |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@raykrueger/cdk-fargate-public-dns.Route53DomainProps">Route53DomainProps</a></code> | *No description.* |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.IService</code> | *No description.* |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: Route53DomainProps;
```

- *Type:* <a href="#@raykrueger/cdk-fargate-public-dns.Route53DomainProps">Route53DomainProps</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* aws-cdk-lib.aws_ecs.IService

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@raykrueger/cdk-fargate-public-dns.PublicIPSupportProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

---

### Route53DomainProps <a name="Route53DomainProps" id="@raykrueger/cdk-fargate-public-dns.Route53DomainProps"></a>

#### Initializer <a name="Initializer" id="@raykrueger/cdk-fargate-public-dns.Route53DomainProps.Initializer"></a>

```typescript
import { Route53DomainProps } from '@raykrueger/cdk-fargate-public-dns'

const route53DomainProps: Route53DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.Route53DomainProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.Route53DomainProps.property.hostedZone">hostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@raykrueger/cdk-fargate-public-dns.Route53DomainProps.property.assumedRole">assumedRole</a></code> | <code>string</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@raykrueger/cdk-fargate-public-dns.Route53DomainProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@raykrueger/cdk-fargate-public-dns.Route53DomainProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: string;
```

- *Type:* string

---

##### `assumedRole`<sup>Optional</sup> <a name="assumedRole" id="@raykrueger/cdk-fargate-public-dns.Route53DomainProps.property.assumedRole"></a>

```typescript
public readonly assumedRole: string;
```

- *Type:* string

---



