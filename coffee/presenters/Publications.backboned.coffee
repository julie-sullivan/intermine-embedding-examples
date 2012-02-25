class Publication extends Backbone.Model

class Publications extends Backbone.Collection
    
    model: Publication

    comparator: (publication) -> publication.get("authors")

class Backboned extends Backbone.View

    initialize: (o) ->
        # Expand on me.
        @[k] = v for k, v of o

        # Make data into a Model.
        @model = new Publications(@data)

    render: ->
        # The header.
        $(@el).append _.template(@templates["header-template"].html(),
            "imObj": @imObj
            "displayerName": @displayerName
        )

        # The table.
        $(@el).append _.template(@templates["table-template"].html(), {"data": @model.toJSON()})

# Save on a callback and trigger us being ready (rendered by the server with our callback key).
Displayers.Callbacks.call("xEnEYa35", Backboned)