import type { Schema, Struct } from '@strapi/strapi';

export interface FaqItemsFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_faq_items_faq_items';
  info: {
    displayName: 'FAQ Items';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TilesTiles extends Struct.ComponentSchema {
  collectionName: 'components_tiles_tiles';
  info: {
    displayName: 'Tiles';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq-items.faq-items': FaqItemsFaqItems;
      'tiles.tiles': TilesTiles;
    }
  }
}
