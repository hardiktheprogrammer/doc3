# Plugins

Plugins extend Craft’s core functionality. They can introduce new Dashboard widgets, field types, control panel sections, Twig templating features, workflow actions, and more.

::: tip
If you’re looking for documentation on plugin _development_, check out [Extending Craft](extend/README.md).
:::

## The Plugin Store

Craft’s control panel features a Plugin Store where you can browse through hundreds of free and commercial plugins, install them with a single click, and purchase licenses.

::: tip
If you’ve disallowed admin changes in production, you will only be able to install plugins from the control panel in your local development environment.
:::

To access the Plugin Store from the control panel, click **Plugin Store** from the main navigation. From there you can browse through the various plugin categories and curated lists to discover new plugins.

![The Craft Plugin Store](./images/plugin-store.png)

Choose any plugin to learn more about its features, pricing, documentation, version history, and see screenshots of it in action.

![Plugin Store plugin detail page](./images/plugin-store-plugin.png)

## Installing Free Plugins

Free plugins can be installed by choosing **Install** from the plugin’s detail page. You’ll be taken to the plugin installer page, which will keep you updated with Craft’s status as it works through the installation.

## Trialing Commercial Plugins

If Craft is running on a development domain or in a local development environment, you can try out any commercial plugin for as long as you’d like by choosing the **Try** button from its detail page. You’ll be taken to the plugin installer page, which will keep you updated with Craft’s status as it works through the installation.

## Buying Commercial Plugins

If you’ve tried a commercial plugin and are ready to purchase a license, return to the Plugin Store and choose the cart icon (<icon kind="cart" />) in the header area. The plugin should be listed in the cart’s **Active Trials** section. Choose **Add to cart** to add the plugin to your cart and proceed with checkout.

Once you’ve completed the checkout process, your plugin installation will automatically become licensed.

::: tip
If you purchase a plugin license separately from a Craft install or need to update a license key, visit **Settings** → **Plugins** in the relevant site’s control panel. From that listing, you can enter a new key or environment variable placeholder for any commercial plugin.

![Changing a plugin license key](./images/changing-plugin-license-key.gif)
:::

## Managing Plugin Licenses

You can manage all your plugin licenses from your [Craft ID](https://id.craftcms.com/) account, under **Licenses** → **Plugins**

If you don’t have a Craft ID account yet, you can create one by going to [id.craftcms.com/register](https://id.craftcms.com/register).

Any plugin licenses purchased with the same email address as your Craft ID account will automatically be added to your account.

If you have a plugin license that isn’t showing up, visit **Licenses** → **Claim License**. You can enter its license key manually, or if you know the email address that was used for purchase, you can enter it in the **Claim licenses by email address** section. After verifying ownership of the email address, any unclaimed licenses associated with that email address will be added to your account.

### Safeguarding Plugin License Keys

By default your plugin license key will be stored in the database and the [project config](project-config.md). You may, however, move that license key to a custom PHP constant and set the key using the `$VARIABLE_NAME` syntax.

If you were to create a `MY_PLUGIN_KEY` environment variable, for example, you could then use `$MY_PLUGIN_KEY` in place of the key itself anywhere the plugin license key is required.

## Transferring Plugin Licenses

To transfer a plugin license to someone else’s Craft ID account, log into your Craft ID account, choose the license under **Licenses** → **Plugins**, and choose the **Release License** to release it from your account. Another person will then be able to claim the license for themself from the **Licenses** → **Claim License** page of their Craft ID account.

## Commercial Plugin Licensing

Commercial plugins in the Plugin Store must follow Craft’s licensing model:

- They are free to try in development environments, but require payment to be used in production environments.
- Commercial licenses are a one-time fee per Craft installation, which comes with access to updates for one year after purchase.
- Additional updates can be available with an annual update fee.
- Licenses can be returned for a full refund within 30 days of purchase, no questions asked.

Additionally, all plugins in the Plugin Store must use either the [MIT License](https://opensource.org/licenses/MIT) or the [Craft License](https://craftcms.github.io/license/). (Generally, free plugins will use the MIT License, and commercial plugins will use the Craft license.)

Together, these rules make plugin licensing safe and predictable for customers, while also helping provide a sustainable business model for plugin vendors.

## Commercial Plugin Support

We don’t impose any specific support requirements on plugin vendors. You will need to check with them to learn about their support policies, so you know what to expect.

If you feel that a plugin vendor isn’t providing a reasonable level of support for a commercial plugin license, please let us know by emailing <support@craftcms.com> and letting us know about the situation.
