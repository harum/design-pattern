# NOTES

## OO Basics
-  Abstraction
-  Encapsulation
-  Polymorphism
-  Inheritance

## OO Principles

-  Identify the aspects of your application that vary and separate them from what stays the same.
-  Program to an interface, not an implementation
-  Favor composition over inheritance
-  Strive for loosely coupled designs between object that interact
-  Classes should be open to extension, but closed for modification
-  Depend upon abstraction. Do not depend upon concrete classes (Dependency
   Inversion Principle)

## The power of a shared pattern vocabulary
-  Shared pattern vocabularies are POWERFUL.
-  Patterns allow you to say more with less.
-  Talking at the pattern level allows you to stay “in the design” longer.
-  Shared vocabularies can turbo-charge your development team.
-  Shared vocabularies encourage more junior developers to get up to speed.


## OO Patterns

### The Strategy Pattern

**The Strategy Pattern** defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

### Observer Pattern
> Publisher + Subscriber = Observer pattern

> **The Observer Pattern** defines a one-to-many dependency between objects so
> that when one object changes state, all of its dependents are notified and
> updated automatically.

### Decorator pattern
> The decorator pattern attaches additional responsibilities to an object
> dynamically. Decorators provide a flexible alternative to subclassing for
> extending functionality

### Singleton pattern
The Singleton Pattern ensures a class has only one instance, and provide a
global point of access to it.

## Self notes
> Should effort go into reuse **above** maintainability and extensibility? (I
> think maintainability and extensibility is **as important as** reuseability)

> Design Patterns give you a shared vocabulary with other developers. Once you’ve got the vocabulary, you can more easily communicate with other developers and inspire those who don’t know patterns to start learning them. It also elevates your thinking about architectures by letting you think at the pattern level, not the nitty-gritty object level.
