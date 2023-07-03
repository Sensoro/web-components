/** Gets an array of components from a CEM object. */
export function getAllComponents(metadata: any) {
  const allComponents: any[] = [];

  metadata.modules.map((module: any) => {
    module.declarations?.map((declaration: any) => {
      if (declaration.customElement) {
        const component = declaration;
        const path = module.path;

        if (component) {
          allComponents.push(Object.assign(component, { path }));
        }
      }
    });
  });

  return allComponents;
}
