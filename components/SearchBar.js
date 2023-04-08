import React from 'react';
import { Flex, Input, Box, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';

import Downshift from 'downshift';

const items = [
  { label: 'Home', link: '/home' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
  // Add more items as needed
];

function SearchBar() {
  return (
    <Downshift
      onChange={(selection) => {
        if (selection) {
          window.location.href = selection.link;
        }
      }}
      itemToString={(item) => (item ? item.label : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
      }) => (
        <div>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <AiOutlineSearch />
            </InputLeftElement>
            <Input {...getInputProps()} placeholder="Search the wiki" fontSize={'sm'} w="256px"  />
          </InputGroup>
          <Box
            {...getMenuProps()}
            display={isOpen ? 'block' : 'none'}
            zIndex={2}
            position="absolute"
            bg="white"
            boxShadow="md"
            borderRadius="md"
            w="256px"
            mt={1}
          >
            {isOpen &&
              items
                .filter(
                  (item) =>
                    !inputValue ||
                    item.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <Box
                    key={item.label}
                    {...getItemProps({ item, index })}
                    bg={
                      highlightedIndex === index ? 'gray.200' : 'transparent'
                    }
                    p={2}
                    cursor="pointer"
                  >
                    {item.label}
                  </Box>
                ))}
          </Box>
        </div>              
      )}
    </Downshift>
  );
}

export default SearchBar;