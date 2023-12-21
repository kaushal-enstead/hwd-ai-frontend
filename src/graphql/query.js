import { gql } from 'urql';

const getPublishedRandomTemplate = gql`
  query {
    getPublishedRandomTemplate(size: 4) {
      name
      template
      isPublished
      _id
      createdAt
    }
  }
`;

const getAllFonts = `
query {
  paginationFonts(sort: NAME_ASC) {
    items{
      name,
      fontUrl
    }
  }
}
`;

export { getPublishedRandomTemplate, getAllFonts };
