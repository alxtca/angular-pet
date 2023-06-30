export interface NavObj {
  title: string,
  submenu?: NavObj[],
  expanded?: boolean,
  link?: string
}

export class Navigation {

  public static getNavigation():NavObj[] {
    return ([
      {
        title: "CRUD applications",
        submenu: [
          {
            title: 'Akita with EntityStore',
            link: 'bug_tracker'
          },
          {
            title: 'Akita with simple Store',
            link: 'akita_simple'
          },
          {
            title: 'Simple Todo',
            link: 'simple-todo'
          },
          {
            title: 'Full Feature Todo App',
            link: 'full-feature-todo'
          },          {
            title: 'Akita state test',
            link: 'akita_state_test'
          },
        ],
        expanded: false
      },
      {
        title: "Communication",
        submenu: [
          {
            title: 'Parent to child',
            link: 'parent-child'
          },
          {
            title: 'Host Listeners',
            link: 'host-listeners'
          },
          {
            title: 'Access to variables. Parent-child/Child-parent.',
            link: '/'
          },
          {
            title: 'View Child',
            link: 'view-child'
          },
        ],
        expanded: false
      },
      {
        title: 'Elements',
        link: '/',
        submenu: [
          {
            title: "Empty",
            link: '/'
          },
        ],
        expanded: false
      },
      {
        title: 'Components',
        link: '/',
        submenu: [
          {
            title: 'Pagination example',
            link: 'pagination-example',
          },
        ],
        expanded: false
      },

      {
        title: "Accessibility",
        link: 'accessibility'
      },
      {
        title: 'Forms',
        link: 'forms',
      },
      {
        title: 'Template variables and ng-template',
        link: 'template-variable',
      },
      {
        title: 'Send notification',
        link: 'notification',
      },
      {
        title: 'Style',
        link: 'style',
      },
      {
        title: 'Events',
        link: 'events',
      },
      {
        title: 'Add observables examples',
        link: '/',
      },
      {
        title: 'How many instances?',
        link: 'instances',
      },
      {
        title: 'Tables',
        link: 'tables',
      },
      {
        title: 'Types',
        link: 'types',
      },
      {
        title: 'Date demo',
        link: 'date-demo',
      },
      {
        title: 'Rendering',
        link: 'rendering',
      },
      {
        title: 'Functions&objects',
        link: 'functions',
      },
      {
        title: 'Testing page',
        link: 'testing',
      },
      {
        title: 'Translate',
        link: 'translate',
      },
      {
        title: 'RxJS',
        link: 'rxjs',
      },
    ])
  }

  public static getRoutes() {
    //look throug nav object
    //if find object with a link ... they don't have reference to the component name ... -_-
    //so either add as another key a componnent name -seem to be a bad solution, because imports will not be added this way

    //fk it...
  }
}
