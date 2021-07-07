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
-  Principle of Least Knowledge: talk only to your immediate friends
-  Don't call us, we will call you. (superclass is running the show, so let them
   call you subclass method when they are needed)

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

### Factory pattern
> The Factory Method Pattern defines an interface for creating an object, but
> lets subclasses decide which class to instantiate. Factory Method lets a class
> defer instantiation to subclasses.

> The Abstract Factory Pattern provides an interface for creating families of
> related or dependent objects without specifying their concrete classes.

### Singleton pattern
The Singleton Pattern ensures a class has only one instance, and provide a
global point of access to it.

### Command pattern
> The command pattern encapsulates a request as an object thereby letting you
> parameterize other objects with different request, queue or log requests, and
> support undoable operations.

### Adapter pattern
> The adapter pattern converts the interface of a class into another interface
> the clients expect. Adapter lets classes work together that couldn't otherwise
> because of incompatible interfaces.

### Facade pattern
> The facade pattern provide a unified interface to a set of interfaces in a
> subsystem. Facade defines a higher-level interface that makes the subsystem
> easier to use.

### Template Method pattern
> The template method define the skeleton of an algorithm in an operation
> deffering some steps to subclasses. Template Method lets subclasses redefine
> certain steps of an algorithm without changing the algorithm's structure.

## Self notes
> Should effort go into reuse **above** maintainability and extensibility? (I
> think maintainability and extensibility is **as important as** reuseability)

> Design Patterns give you a shared vocabulary with other developers. Once you’ve got the vocabulary, you can more easily communicate with other developers and inspire those who don’t know patterns to start learning them. It also elevates your thinking about architectures by letting you think at the pattern level, not the nitty-gritty object level.
