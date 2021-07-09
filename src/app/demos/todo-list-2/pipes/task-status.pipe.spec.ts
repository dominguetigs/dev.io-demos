import { Component } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusPipe } from './task-status.pipe';

describe('TaskStatusPipe', () => {
  describe('TaskStatusPipe -> Teste de Unidade', () => {
    const taskStatusPipe = new TaskStatusPipe();

    it('Formata o status corretamente', () => {
      expect(taskStatusPipe.transform('BACKLOG')).toBe('Backlog');
      expect(taskStatusPipe.transform('TO_DO')).toBe('To Do');
      expect(taskStatusPipe.transform('IN_PROGRESS')).toBe('In Progress');
      expect(taskStatusPipe.transform('DONE')).toBe('Done');
    });

    it('Retorna status vazio caso não for passado nada para o pipe', () => {
      expect(taskStatusPipe.transform()).toBe('');
    });
  });

  describe('TaskStatusPipe -> Teste Comportamental', () => {
    @Component({
      template: 'Status: {{ status | taskstatus }}',
    })
    class TestComponent {
      status = 'BACKLOG';
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let element: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TaskStatusPipe, TestComponent],
      });

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
    });

    it('Renderiza o status corretamente', () => {
      fixture.detectChanges();
      expect(element.textContent).toContain('Status: Backlog');

      component.status = 'TO_DO';
      fixture.detectChanges();
      expect(element.textContent).toContain('Status: To Do');

      component.status = 'IN_PROGRESS';
      fixture.detectChanges();
      expect(element.textContent).toContain('Status: In Progress');

      component.status = 'DONE';
      fixture.detectChanges();
      expect(element.textContent).toContain('Status: Done');
    });

    it('Renderiza vazio caso passe nenhum status', () => {
      component.status = '';
      fixture.detectChanges();
      expect(element.textContent).toContain('Status: ');
    });
  });
});
