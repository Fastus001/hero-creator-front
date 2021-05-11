export class BaseStat{
  private name: string;
  private stat: number;
  private expansion: number;
  constructor(name: string, stat: number, expansion: number) {
    this.name = name;
    this.stat = stat;
    this.expansion = expansion;
  }
}
