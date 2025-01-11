# Hexagonal Architecture

This is an attempt to implement hexagonal architecture in typescript following the principles outlined in "Get Your Hands Dirty on Clean Architecture" by Tom Hombergs
The goal is to gain understanding and share observations.

## Architectural rules

- [ ] Enforce architectural patterns using a tool (don't rely on discipline)
- [ ] Use dependency injection to maintain loose coupling and apply the dependency inversion principle
- [ ] Inbound adapters should have no direct knowledge of your domain, should rely on commands and useCases instead, this is enforced in [.dependency-cruiser](./.dependency-cruiser.js)

## Checklist

- [x] Separate app from server in order to set up system tests using super tests
- [x] Set up dependency injection in order to reduce express / nodejs boilerplate
- [x] Dependency injection in order to associate an interface with a concrete class for loose coupling
- [ ] Finish implementing the typescript equivalent of [thombergs/buckpal](https://github.com/thombergs/buckpal)
- [ ] Implement additional ports, adapters and use cases
- [ ] Enforce architectural boundaries using architecture tests like `archunit` or equivalent

## Observations

### Dependency injection tools in nodejs

I wanted to stay away from manual dependency injection for a couple of reasons

1. Wiring up controllers and endpoints in express without decorators has some boilerplate that is distracting.
2. You get cleaner loose coupling with a container than with manual injection.

I started by using the package `@decorators/di` and `@decorators/express` got my controllers hooked up but had trouble injecting a service into the controller. 
Then Found `inversify` and `inversify-express-utils` but couldn't get my endpoints registered with express so went back to using the original package.

`inversify-express-utils` relied on the side effect of importing a controller which I'm not a huge fan of. So for now i'd favor using `@decorators/express`.
That is, if you're not going to go with a framework that has this built in, like [nestjs](https://nestjs.com/).

*Conclusion:*

I'm not too excited about any of the dependency injection libraries in typescript.
I couldn't get things to work well using `inversify` and `inversify-express-utils`.
Otherwise [@decorators/express](https://github.com/serhiisol/node-decorators) while working, is in public archive and no longer maintained.

If you have a great alternative to these to that isn't tied to a larger framework like nestjs, please open an issue on this repo. I'd love to hear about it.

### Enforcing Architectural Patterns

Again, the results here were underwhelming for javascript.
A quick google using the search terms "ArchUnit typescript" or "Architecture Tests {Javascript,Typescript}"

Lead me to the following results

- [ts-arch](https://github.com/ts-arch/ts-arch)
- [ts-arch-unit](https://github.com/amaro0/ts-arch-unit)
- [archijs](https://github.com/migh1/archijs)

With all of these I ran into an issue that made them unreliable enough not to use.

These issues include:

- not scanning subdirectories, for example if I want to ensure that files in domains don't directly reference each other
- not throwing an error if a folder doesn't exist, instead just passing the test
- lacking clear documentation or are not actively being maintained

*Conclusion:*

I almost gave up but then found [depdendency-cruiser](https://github.com/sverweij/dependency-cruiser).
This satisfies my current use case and offers some useful constructs.

It also meets the following criteria:

- Has a larger user base 5.5k stars
- Uses acorn to traverse dependencies rather than a custom solution
- Is actively maintained (as of January 2025)
- Has 44 contributors

All of these stats blew the other libraries out of the water.
So until there is a better implementation, this is the way to go.
