# checkout-link
This customized built-in element renders a checkout link supporting most of the features documented at https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=businessservices&title=UCv3+Link+Creation+Guide

Behind the scene, it uses https://git.corp.adobe.com/PandoraUI/commerce-core to generate the checkout url.

It requires an Offer Selector ID.

## Offer Selector ID <br>
AOS generated a stable reference for a set of natural keys allowing to retrieve a specific offer whose offer ID can change over time.

[API: Create an offer selector](https://developers.corp.adobe.com/aos/docs/guide/apis/api.yaml#/paths/offer_selectors/post)


## Example <br>

```html
<a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M">Buy now</a>
```

### Demo<br>

This is a functional **buy now** button: <a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M">Buy now</a>


## Attributes

| Attribute                    | Description                                                                                     | Default Value | Required |
|------------------------------|-------------------------------------------------------------------------------------------------|---------------|----------|
| `data-wcs-osi`               | Offer Selector ID, can be multiple, seperated by comma           |               |   `true`       |
| `data-checkout-workflow`     | Target checkout workflow to for the generation of checkout urls     | UCv3              |         `false` |
| `data-checkout-workflow-step`| [workflow step](https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=businessservices&title=UCv3+Link+Creation+Guide#UCv3LinkCreationGuide-RegularWorkflow)|     email          |     `false`     |
| `data-extra-options`         | additional query params to append to the url, see: [Table of public query params](https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=businessservices&title=UCv3+Link+Creation+Guide#UCv3LinkCreationGuide-Tableofpublicqueryparams)|        {}       |   `false`       |
| `data-ims-country`           | the ims country to code of the user if signed in, overrides the locale country in the generated checkout url           |              |   `false`       |
| `data-perpetual`             | whether this is a perpetual offer `true\|false`             |               |          |
| `data-promotion-code`        | Flex promotion code, if applicable        |               |          |
| `data-quantity`              | Quantity of the offer to purchase              |               |          |
| `data-entitlement`           | `entitlement` flag for client side interpretation           |    `false`           |          `false` |
| `data-upgrade`               | `upgrade` flag for client side interpretation               |     `false`          |  `false`        |
| `data-modal`                 | `modal` flag for client side interpretation                 |     `false`          |      `false`    |



## Examples <br>


## Custom Workflow Step

```html
<a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M" data-checkout-workflow-step="recommendation">Buy now</a>
```

### Demo<br>
<a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M" data-checkout-workflow-step="recommendation">Buy now</a>

## Multiple Quantities
Two photoshop and three acrobat pro single apps (TEAMS):

```html
<a href="#" is="checkout-link" data-wcs-osi="yHKQJK2VOMSY5bINgg7oa2ov9RnmnU1oJe4NOg4QTYI,vV01ci-KLH6hYdRfUKMBFx009hdpxZcIRG1-BY_PutE" data-quantity="2,3">Buy now</a>
```

### Demo<br>
<a href="#" is="checkout-link" data-wcs-osi="yHKQJK2VOMSY5bINgg7oa2ov9RnmnU1oJe4NOg4QTYI,vV01ci-KLH6hYdRfUKMBFx009hdpxZcIRG1-BY_PutE" data-quantity="2,3">Buy now</a>


## Custom query params

```html
<a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M" data-extra-options="{&quot;promoid&quot;:&quot;promo12345&quot;,&quot;mv&quot;:1,&quot;mv2&quot;:2}">Buy now</a>
```

### Demo<br>
<a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M" data-extra-options="{&quot;promoid&quot;:&quot;promo12345&quot;,&quot;mv&quot;:1,&quot;mv2&quot;:2}">Buy now</a>


## IMS Country

```html
<a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M" data-ims-country="JP">Buy now</a>
```

### Demo<br>
<a href="#" is="checkout-link" data-wcs-osi="A1xn6EL4pK93bWjM8flffQpfEL-bnvtoQKQAvkx574M" data-ims-country="JP">Buy now</a>


