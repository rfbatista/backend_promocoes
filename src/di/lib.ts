import { autoInjectable, inject, injectable, container, singleton } from 'tsyringe';

const Service = autoInjectable;
const Container = container;
const Inject = inject;
const Singleton = singleton;

export { Service, Container, Inject, Singleton };
