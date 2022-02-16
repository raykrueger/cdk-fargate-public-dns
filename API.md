# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PublicIPSupport <a name="PublicIPSupport" id="cdk-fargate-public-dns.PublicIPSupport"></a>

#### Initializers <a name="Initializers" id="cdk-fargate-public-dns.PublicIPSupport.Initializer"></a>

```typescript
import { PublicIPSupport } from 'cdk-fargate-public-dns'

new PublicIPSupport(scope: Construct, id: string, props: PublicIPSupportProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-fargate-public-dns.PublicIPSupportProps">PublicIPSupportProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-fargate-public-dns.PublicIPSupport.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-fargate-public-dns.PublicIPSupportProps">PublicIPSupportProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupport.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-fargate-public-dns.PublicIPSupport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-fargate-public-dns.PublicIPSupport.isConstruct"></a>

```typescript
import { PublicIPSupport } from 'cdk-fargate-public-dns'

PublicIPSupport.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-fargate-public-dns.PublicIPSupport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-fargate-public-dns.PublicIPSupport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### PublicIPSupportProps <a name="PublicIPSupportProps" id="cdk-fargate-public-dns.PublicIPSupportProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-public-dns.PublicIPSupportProps.Initializer"></a>

```typescript
import { PublicIPSupportProps } from 'cdk-fargate-public-dns'

const publicIPSupportProps: PublicIPSupportProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupportProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | *No description.* |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupportProps.property.dnsConfig">dnsConfig</a></code> | <code><a href="#cdk-fargate-public-dns.Route53DomainProps">Route53DomainProps</a></code> | *No description.* |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupportProps.property.service">service</a></code> | <code>aws-cdk-lib.aws_ecs.IService</code> | *No description.* |
| <code><a href="#cdk-fargate-public-dns.PublicIPSupportProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="cdk-fargate-public-dns.PublicIPSupportProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="cdk-fargate-public-dns.PublicIPSupportProps.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: Route53DomainProps;
```

- *Type:* <a href="#cdk-fargate-public-dns.Route53DomainProps">Route53DomainProps</a>

---

##### `service`<sup>Required</sup> <a name="service" id="cdk-fargate-public-dns.PublicIPSupportProps.property.service"></a>

```typescript
public readonly service: IService;
```

- *Type:* aws-cdk-lib.aws_ecs.IService

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="cdk-fargate-public-dns.PublicIPSupportProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays

---

### Route53DomainProps <a name="Route53DomainProps" id="cdk-fargate-public-dns.Route53DomainProps"></a>

#### Initializer <a name="Initializer" id="cdk-fargate-public-dns.Route53DomainProps.Initializer"></a>

```typescript
import { Route53DomainProps } from 'cdk-fargate-public-dns'

const route53DomainProps: Route53DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-fargate-public-dns.Route53DomainProps.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-public-dns.Route53DomainProps.property.hostzedZone">hostzedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-fargate-public-dns.Route53DomainProps.property.assumedRole">assumedRole</a></code> | <code>string</code> | *No description.* |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-fargate-public-dns.Route53DomainProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostzedZone`<sup>Required</sup> <a name="hostzedZone" id="cdk-fargate-public-dns.Route53DomainProps.property.hostzedZone"></a>

```typescript
public readonly hostzedZone: string;
```

- *Type:* string

---

##### `assumedRole`<sup>Optional</sup> <a name="assumedRole" id="cdk-fargate-public-dns.Route53DomainProps.property.assumedRole"></a>

```typescript
public readonly assumedRole: string;
```

- *Type:* string

---



