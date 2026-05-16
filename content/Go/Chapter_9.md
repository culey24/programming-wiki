# Chapter 9: Go Goroutines & Summary

Go is famous for its built-in support for concurrency through Goroutines and Channels.

## 1. Goroutines

A **goroutine** is a lightweight thread managed by the Go runtime. To run a function in a goroutine, just use the `go` keyword.

```go
go f(x, y, z)
```

Goroutines run in the same address space, so access to shared memory must be synchronized.

---

## 2. Channels

Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine.

```go
ch := make(chan int) // Create a channel

ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and assign value to v.
```

By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks.

---

## 3. Select

The `select` statement lets a goroutine wait on multiple communication operations.

```go
select {
case msg1 := <-c1:
    fmt.Println("received", msg1)
case msg2 := <-c2:
    fmt.Println("received", msg2)
}
```

---

## 4. Error Handling

In Go, errors are values. Functions often return an `error` as their last return value.

```go
f, err := os.Open("filename.ext")
if err != nil {
    log.Fatal(err)
}
```

---

## 5. Go Summary

Congratulations! You have completed the Go programming course. You now know:
- Go's unique syntax and package-based structure.
- Variable declarations and static typing.
- How to use slices and maps for data collections.
- How to define methods and use interfaces for abstraction.
- The power of concurrency with Goroutines and Channels.

### What's Next?
- Explore the **Go Standard Library** (it's very powerful!).
- Learn about **Go Modules** for dependency management.
- Start building a **Web API** with Go (check out `net/http` or frameworks like Gin/Fiber).
- Dive into **Microservices** and **Cloud Native** development with Go.
