export class BaseStat{
  name: string;
  stat: number;
  expansion: number;
  constructor(name: string, stat: number, expansion: number) {
    this.name = name;
    this.stat = stat;
    this.expansion = expansion;
  }
}
