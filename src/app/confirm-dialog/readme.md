Использование модуля:
1. Импортировать в модуль приложения `AlertDialogModule`
2. В компоненте использовать:

    this.alertDialogService.show('Привет мир', true).subscribe(
    
       (data: boolean) => {
       
         console.log(data);
         
       }
       
     );
     