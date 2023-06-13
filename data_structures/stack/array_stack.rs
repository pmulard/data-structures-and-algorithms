#[derive(Debug)]
struct Stack {
    stack: Vec<T>
}

impl Stack {
    fn new() -> Self {
        Stack {
            stack: Vec::new()
        }
    }

    fn push(self, element: T) {
        self.stack.push(element);
    }

    fn pop(self) -> <T> {
        return self.stack.pop();
    }

    fn peek(self) -> Option<T> {
        if (self.isEmpty()) return None;
        return Some(self.stack[self.stack.length - 1]);
    }

    fn clear(self) {
        self.stack = Vec::new();
    }

    fn display(self) {
        println!("{:?}", self.stack)
    }

    fn isEmpty(self) -> Boolean {
        return self.stack.len() == 0;
    }
}