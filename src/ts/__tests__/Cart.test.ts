import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
const movie = new Movie(1009, 'The Avangers', 2012, 'USA', 'Avangers Assemble!', ['fantasy', 'adventure', 'thriller'], 137, 399);

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('new card should add items', () => {
  const cart = new Cart();
  const result = [book, musicAlbum, movie];
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  expect(cart.items).toEqual(result);
});

test('card should calculate cost without discount', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  expect(cart.sumWithoutDiscount()).toBe(3299);
});

test('card should calculate cost with discount', () => {
  const cart = new Cart();
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  expect(cart.sumWithDiscount(50)).toBe(1649.5);
});

test('card should delete item by id', () => {
  const cart = new Cart();
  const result = [book, movie];
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  cart.deleteItem(1008);
  expect(cart.items).toEqual(result);
});
