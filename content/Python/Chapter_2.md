# Chapter 2: Lists

In Python, a **List** is a collection of items in a particular order.

- You can create a list containing letters, numbers from 0 to 9, or names of all your family members.
- You can put anything you want into a list, and the items in your list don’t have to be related in any particular way.

## 1. Defining a List

In Python, square brackets `[]` indicate a list, and individual elements in the list are separated by **commas**.

> **Tip:** Because a list usually contains more than one element, it’s a good idea to make the name of your list **plural** (e.g., `letters`, `digits`, or `names`).

```python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)
```

- When you ask Python to print a list, it returns its representation, including the square brackets:
```
['trek', 'cannondale', 'redline', 'specialized']
```

## 2. Accessing Elements in a List

Lists are ordered collections, so you can access any element in a list by telling Python the position, or **index**, of the item desired. To access an element in a list, write the name of the list followed by the index of the item enclosed in **square brackets**.

```python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[0])

# Output: trek
```

> **Note:** When you ask for a single item from a list, Python returns just that element without square brackets.

### Using String Methods on List Elements

You can use string methods (like `title()`, `upper()`, `lower()`) on any element in a list.

```python
print(bicycles[0].title()) # Output: Trek
```

## 3. Index Positions Start at 0, Not 1

In Python (and most other programming languages), the first element in a list is at **position 0**, not position 1.

```python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[1]) # Returns the second item: cannondale
print(bicycles[3]) # Returns the fourth item: specialized
```

### Negative Indexes (Accessing from the End)

Python has a special syntax for accessing the last element in a list by using index **-1**.

- Index `-1`: Returns the last item.
- Index `-2`: Returns the second item from the end.
- Index `-3`: Returns the third item from the end.

```python
print(bicycles[-1]) # Output: specialized
```

*This syntax is quite useful when you want to get the last element without knowing exactly how long the list is.*

---

## MODIFYING, ADDING, AND REMOVING ELEMENTS

Most lists you create will be **dynamic**. This means you’ll build a list and then add and remove elements as your program runs (e.g., adding new monsters to a game or removing users when they cancel their accounts).

## 1. Modifying Elements in a List

The syntax for modifying an element is similar to the syntax for accessing an element.

- Use the name of the list followed by the index of the element you want to change, and then provide the new value.
```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)

# Changing the first element to 'ducati'
motorcycles[0] = 'ducati'
print(motorcycles)
```
Output:
```
['honda', 'yamaha', 'suzuki']
['ducati', 'yamaha', 'suzuki']
```

## 2. Adding Elements to a List

Python provides several ways to add new data to an existing list.

### Appending Elements to the End with `append()`

The simplest way to add a new element to a list is to `.append()` the item, which adds it to the end of the list.

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.append('ducati')
print(motorcycles)
# Output: ['honda', 'yamaha', 'suzuki', 'ducati']
```

You can also start with an empty list and add elements one by one:
```python
motorcycles = []
motorcycles.append('honda')
motorcycles.append('yamaha')
motorcycles.append('suzuki')
print(motorcycles)

# Output: ['honda', 'yamaha', 'suzuki']
```

### Inserting Elements into a List with `insert()`

You can add a new element at any position in your list by using the `insert()` method. You do this by specifying the **index** and the **value**. This shifts the rest of the elements to the right.

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.insert(0, 'ducati')
print(motorcycles)
# Output: ['ducati', 'honda', 'yamaha', 'suzuki']
```

## 3. Removing Elements from a List

Depending on whether you know the position or the value, there are several ways to remove items:

### Using the `del` Statement (By Position)

If you know the position of the item you want to remove and **don't need to use** the value after removing it.

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
del motorcycles[0] # Removes the first element
print(motorcycles)
# Output: ['yamaha', 'suzuki']
```

### Using the `pop()` Method (Remove and Use)

The `.pop()` method removes the last item in a list, but it **returns** that value so you can still use it.

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
popped_motorcycle = motorcycles.pop()
print(motorcycles)        # Output: ['honda', 'yamaha']
print(popped_motorcycle) # Output: suzuki
```

#### Using `.pop(index)` 

You can use `pop()` to remove an item from any position in a list by including the index of the item you want to remove in parentheses.

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
first_owned = motorcycles.pop(0)
print(f"The first motorcycle I owned was a {first_owned.title()}.")
# Output: The first motorcycle I owned was a Honda.
```

> **Note:** When should you use `del` and when should you use `pop()`?
> 
> - Use **`del`**: When you want to delete an item and not use it in any way.
> - Use **`pop()`**: When you want to remove an item but still use its value.

### Removing an Item by Value with `remove()`

If you don't know the position but you know the **value** of the item you want to remove.

```python
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']
motorcycles.remove('ducati')
print(motorcycles)
# Output: ['honda', 'yamaha', 'suzuki']
```

You can also use a variable to store the value before removing it:

```python
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']
too_expensive = 'ducati'
motorcycles.remove(too_expensive)
print(f"\nA {too_expensive.title()} is too expensive for me.")
```

> **Important Note:** The `remove()` method deletes only the **first occurrence** of the value you specify. If the value appears more than once, you’ll need to use a loop.

---

# ORGANIZING A LIST

Often, your lists will be created in an unpredictable order. However, you'll often want to present your data in a particular order. Python provides several ways to organize your lists.

## 1. Sorting a List Permanently with the `sort()` Method

The `sort()` method makes it relatively easy to sort a list. It changes the order of the list **permanently**.

- **Sorting Alphabetically:**

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort()
print(cars)
# Output: ['audi', 'bmw', 'subaru', 'toyota']
```

- **Sorting in Reverse Alphabetical Order:**

	- Pass the argument `reverse=True` to the `sort()` method.

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
cars.sort(reverse=True)
print(cars)
# Output: ['toyota', 'subaru', 'bmw', 'audi']
```

## 2. Sorting a List Temporarily with the `sorted()` Function

To maintain the original order of a list but present it in a sorted order, use the `sorted()` function. This function lets you display your list in a particular order but **doesn’t affect** the actual order of the list.

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']

print(cars)
# Output: ['bmw', 'audi', 'toyota', 'subaru']

print(sorted(cars))
# Output: ['audi', 'bmw', 'subaru', 'toyota']

print(cars)
# Output: ['bmw', 'audi', 'toyota', 'subaru']
```

> **Note:** The `sorted()` function can also accept a `reverse=True` argument.

> **Note on Case Sensitivity:** Sorting is different if the list contains capitalized characters. In ASCII, uppercase letters always come before lowercase letters.

## 3. Reversing the Order of a List with the `reverse()` Method

To reverse the original order of a list, you can use the `reverse()` method. Note that `reverse()` **doesn’t sort** alphabetically backward; it simply reverses the order of the items in the list.

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
print(cars)

cars.reverse()
print(cars)
# Output: ['subaru', 'toyota', 'audi', 'bmw']
```

- **Note:** This method changes the order permanently, but you can revert to the original order by calling `reverse()` again on the same list.

## 4. Finding the Length of a List with the `len()` Function

You can find the number of items in a list by using the `len()` function.

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
len(cars)
# Output: 4
```

> **Note:** Python counts the items in a list starting with **1**, so you shouldn’t run into any off-by-one errors when determining the length of a list.
