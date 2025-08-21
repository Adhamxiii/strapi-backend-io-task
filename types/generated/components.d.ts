import type { Schema, Struct } from '@strapi/strapi';

export interface TextTitle extends Struct.ComponentSchema {
  collectionName: 'components_text_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.title': TextTitle;
    }
  }
}
