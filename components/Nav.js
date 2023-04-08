import {
  Box,
  Flex,
  Text,
  Center,
  Avatar,
  Link,
  IconButton,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useOutsideClick,
  useBreakpointValue,
  useColorModeValue,
  useColorMode,
  Stack,
  Collapse,
} from '@chakra-ui/react';
import { 
  MoonIcon,
  Search2Icon,
  SearchIcon,
  SunIcon, 
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { NAV_ITEMS } from '../data/navItems';
import SearchBar from './SearchBar';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useRef } from 'react';


export default function Nav() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isOpenSearch, onToggle: onToggleSearch, onOpen: onOpenSearch, onClose: onCloseSearch } = useDisclosure();
  const logoTextAlignValue = useBreakpointValue({ base: 'center', lg: 'right' });
  const logoColorValue = useColorModeValue('gray.800', 'white');
  const searchRef = useRef();

  useOutsideClick({
    ref: searchRef,
    handler: () => isOpenSearch && onCloseSearch(),
  });

  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}        
      >
        <Flex
          width={{
            base: '100%',
            sm: '100%', // 0-30em
            md: '100%', // 30em-48em
            lg: '1024px', // 48em-62em
            xl: '1280px', // 62em+
          }}
        >
          <Flex
            flex={{ base: 1, lg: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex 
            flex={{ base: 1 }} 
            justify={{ base: 'center', lg: 'start' }}
          >
            <Center>
              {!isOpenSearch && (
                <Link
                  textAlign={logoTextAlignValue}
                  fontFamily={'heading'} 
                  color={logoColorValue}
                  fontSize={'md'}
                  fontWeight={700}
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  DL Wiki
                </Link>
              )}

              <Flex display={{ base: 'none', lg: 'flex' }} ml={10} >
                <DesktopNav />
              </Flex>
            </Center>
          </Flex>

          <Stack
            flex={{ base: 1, lg: 1 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={{base: 0, lg: 6}}
          >
            <Flex
              display={{ base: 'none', lg: 'inline-flex' }}
            >
              <SearchBar />
            </Flex>
            <Box ref={searchRef}>

              {!isOpenSearch && (
                <Button 
                  onClick={isOpenSearch ? onCloseSearch : onOpenSearch}
                  display={{ base: 1, lg: 'none' }}
                  variant={'ghost'}
                  fontSize={'sm'}
                  fontWeight={400}>
                  <SearchIcon />
                </Button>
              )}

              {
                isOpenSearch && (
                  <SearchBar />
                )
              }
            </Box>

            <Button onClick={toggleColorMode}
              variant={'ghost'}
              fontSize={'sm'}
              fontWeight={400}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Button
              display={{ base: 'none', lg: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={''}>
              Sign In
            </Button>
            <Button
              display={{ base: 'none', lg: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={500}
              // bg={'pink.400'}
              href={''}
              // _hover={{
              //   bg: 'pink.300',
              // }}
              >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Flex>
      {isOpen && <MobileNav isOpen={isOpen} />}
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? ''}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      w={'full'}
      pos="absolute"
      zIndex={99999}
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ lg: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      {isOpen && <Stack
        mt={2}
        pl={4}
        borderLeft={1}
        borderStyle={'solid'}
        borderColor={borderColor}
        align={'start'}>
        {children &&
          children.map((child) => (
            <Link key={child.label} py={2} href={child.href}>
              {child.label}
            </Link>
          ))}
      </Stack>}
    </Stack>
  );
};

