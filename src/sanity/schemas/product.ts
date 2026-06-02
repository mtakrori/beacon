import { defineType, defineField } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'string',
      options: {
        list: [
          { title: 'Brass Collection', value: 'Brass' },
          { title: 'Crystal Collection', value: 'Crystal' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      description: 'Brass: Chandeliers, Ceilings, Lanterns, Wall Brackets, Table Lamps, Floor Lamps, Accessories. Crystal: Crystal Chandeliers, Large Crystal Chandeliers, Glass Chandeliers, Maria Theresa, Crystal Lanterns, Crystal Ceiling, Crystal Wall Light.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Chandeliers', 'Ceilings', 'Lanterns', 'Wall Brackets', 'Table Lamps', 'Floor Lamps', 'Accessories',
          'Crystal Chandeliers', 'Large Crystal Chandeliers', 'Glass Chandeliers', 'Maria Theresa', 'Crystal Lanterns', 'Crystal Ceiling', 'Crystal Wall Light',
        ],
      },
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'variants',
      title: 'Available Dimensions',
      description: 'List each size option, e.g. "H: 60cm / Ø: 80cm", "H: 90cm / Ø: 120cm"',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'material',
      title: 'Material / Finish',
      type: 'string',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'featuredItem',
      title: 'Featured Item',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
