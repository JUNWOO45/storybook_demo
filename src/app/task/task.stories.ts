import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';
import { TaskComponent } from './task.component';

export const task = {
    id: '1',
    title: '테스트 태스크',
    state: 'TASK_INBOX',
    updatedAt: new Date(2019, 0, 1, 9, 0),
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArciveTask'),
};

storiesOf('Task', module)
    .addDecorator(
        moduleMetadata({
            declarations: [TaskComponent],
        })
    )
    .add('default', () => {
        return {
            template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
            props: {
                task,
                onPinTask: actions.onPinTask,
                onArchiveTask: actions.onArchiveTask
            },
        };
    })
    .add('pinned', () => {
        return {
            template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
            props: {
                task: {
                    ...task,
                    state: 'TASK_PINNED',
                    
                },
                onPinTask: actions.onPinTask,
                onArchiveTask: actions.onArchiveTask
            }  
        }
    })
    .add('archived', () => {
        return {
            template: `<task-item [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></task-item>`,
            props: {
                task: {
                    ...task,
                    state: 'TASK_ARCHIVED'
                },
                onPinTask: actions.onPinTask,
                onArchiveTask: actions.onArchiveTask
            }
        }
    })