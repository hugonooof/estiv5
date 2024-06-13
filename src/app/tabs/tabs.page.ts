import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public plage: any;
  constructor(private router :Router) {}

  async segmentChanged(e){
    
    console.log('segmentChanged: nouvelle valeur: ' + e.target.id);
     //console.log('2' + e.detail.value);
     this.plage = e.target.id;
 
     switch(this.plage) { 
      case "erquy": { 
         //statements;  /tabs/tab1
         this.router.navigate(['/tabs/tab1'])
         break; 
      } 
      case "saintcast": { 
         //statements; 
         this.router.navigate(['/tabs/tab3'])
         break; 
      } 
      case "sabledor": { 
        //statements; 
        this.router.navigate(['/tabs/tab2'])
        break; 
     } 
      default: { 
         //statements; 
         break; 
      }

   //  await this.storage.set('plage', this.plage);
 
   //  this.globalVariableProviderService.setValeur(this.plage);
     
   //   console.log('[GETglobalVariableProviderService] '+ this.globalVariableProviderService.valeur);
    // console.log('Set storage : ' + e.target.id)
 
    // this.router.navigate(['../homeplage/'+ this.plage])
    
}

}
}
