module Jekyll
  class RenderTimeTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "#{@text} #{{ Time.now | date_to_xmlschema }}"
    end
  end
end

Liquid::Template.register_tag('render_time', Jekyll::RenderTimeTag)