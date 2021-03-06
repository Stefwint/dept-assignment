import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../theme';

// Styling
import { Box, Flex, Row, Text } from '../../styles';

const Quote = ({ item }) => {
  const { quote, name } = item;

  return (
    <Row px={[20, 20, 0]} mt={[20, 40]}>
      <Flex pt={[40, 80]} pb={[40, 60]} justifyContent="center" className="border">
        <Box width={[1, 10 / 12, 8 / 12]}>
          {quote && (
            <Text as="blockquote" fontSize={[24, 36]}>
              {quote}
            </Text>
          )}
          {name && (
            <Text
              as="span"
              mt={30}
              fontSize={13}
              fontWeight="700"
              color={theme.colors.blackTwo}
              className="block upper"
            >
              {name}
            </Text>
          )}
        </Box>
      </Flex>
    </Row>
  );
};

Quote.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Quote;
