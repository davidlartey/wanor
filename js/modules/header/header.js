/**
 *
 */

define([
        'app',
        'tpl!modules/header/templates/header.html'
    ], function(Wanor, tplHeader) {

        Wanor.module("Header", function(Header, Wanor, Backbone, Marionette, $, _) {

            // Header View
            Header.View = Marionette.ItemView.extend({
                template : tplHeader,
                tagName : 'nav',
                className : 'navbar navbar-inverse navbar-fixed-top',
                attributes : {
                    role : "navigation"
                },
            });

            // Display
            Wanor.appLayout.header.show(new Header.View());
        });

        // Return
        return Wanor.Header;

    }
);