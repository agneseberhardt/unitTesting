import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appC : AppComponent = new AppComponent(); // Add this
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  
  });

  

  //check result of function
  it('should be able to add two whole numbers', () => {
    expect(appC.add(2, 2)).toEqual(4);
  });
  
  it('should be able to substract two whole numbers', () => {
    expect(appC.sub(2, 2)).toEqual(0);
  });


  it('should not add up right', () => {
    expect(appC.add(2, 2)).not.toEqual(5);
  });
  
  it('should not equal to 10', () => {
    expect(appC.sub(2, 2)).not.toEqual(10);
  });

  it('should be true', () => {
    appC.mainDisplayText = '5';
    appC.pressKey('+');
    expect(appC.operatorSet).toBeTruthy();
  });

  it('should be false', () => {
    appC.pressKey('+');
    expect(appC.operatorSet).toBeFalse();
  });


  it('allclear should empty the screen ', () => {
    appC.allClear();
    expect(appC.mainDisplayText).toBe('');
    expect(appC.subDisplayText).toBe('');
    expect(appC.operatorSet).toBeFalse();

  });

  

 
});


