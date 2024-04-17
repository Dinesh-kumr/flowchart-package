import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-flow-chart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flow-chart.component.html',
  styleUrl: './flow-chart.component.css'
})
export class FlowChartComponent {
  @Input() flowDataList: any[] = [];
  isPopoverVisible: boolean = false;
  selectedList: any = {};
  popoverStyles = {
    top: '0px',
    left: '0px'
  };
  optionSelecting(selectedData: 'step' | 'condition') {
    const data: any = selectedData === 'step' ? { label: "" } : {
      label: "",
      condition: [
        { label: "", flowDataList: [] },
        { label: "", flowDataList: [] }
      ]
    };
    this.selectedList.arr.splice(this.selectedList.index, 0, data);
  }

  openOptions(event: any, arr: any, index: number) {
    this.isPopoverVisible = !this.isPopoverVisible;
    if (this.isPopoverVisible) {
      const buttonRect = event.target.getBoundingClientRect();
      this.popoverStyles = {
        top: `${buttonRect.bottom + window.scrollY}px`,
        left: `${buttonRect.left}px`
      };
    }
    this.selectedList = { arr, index };
  }

  closePopover() {
    this.isPopoverVisible = false;
  }
  deleteSelectedElement(arr: any, index: number) {
    arr.splice(index, 1);
  }
}
