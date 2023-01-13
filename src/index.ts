interface RuleInterface {
  matches(number: number): boolean;
  getReplacement(): string;
}

class FizzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0;
  }

  getReplacement(): string {
    return 'Fizz';
  }
}

class BuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0;
  }

  getReplacement(): string {
    return 'Buzz'
  }
}

class FizzBuzzRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }

  getReplacement(): string {
    return 'FizzBuzz'
  }
}

class FizzBuzz {
  rule: RuleInterface[] = [];

  addRule(rule: RuleInterface) {
    this.rule.push(rule);
  }

  generate(input: number) {
    const output: string[] = [];

    for (let i = 1; i <= input; i++) {
      output.push(this.getReplacement(i));
    }

    return output
  }

  getReplacement(input: number) : string {
    for (const rule of this.rule) {
      if (rule.matches(input)) {
        return rule.getReplacement();
      }
    }
    return String(input)
  }
}

const fizzBuzz = new FizzBuzz();
fizzBuzz.addRule(new FizzBuzzRule());
fizzBuzz.addRule(new BuzzRule());
fizzBuzz.addRule(new FizzRule());

const result = fizzBuzz.generate(50);

console.log(result);