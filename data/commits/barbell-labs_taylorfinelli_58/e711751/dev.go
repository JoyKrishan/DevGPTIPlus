package util

import (
	"sync/atomic"
)

// boolToInt32 converts a boolean value to an int32 representation,
// where true is represented as 1 and false as 0. This is used for atomic
// operations on boolean values.
func boolToInt32(b bool) int32 {
	if b {
		return 1
	}
	return 0
}

// AtomicBool provides an atomic boolean type, allowing for safe concurrent
// access and modification of a boolean value.
type AtomicBool struct {
	state int32 // "1" is true, "0" is false
}

// NewAtomicBool initializes a new AtomicBool with the given initial state.
func NewAtomicBool(initialState bool) *AtomicBool {
	return &AtomicBool{state: boolToInt32(initialState)}
}

// Get atomically retrieves the current value of the boolean.
func (a *AtomicBool) Get() bool {
	return atomic.LoadInt32(&a.state) == 1
}

// Set atomically updates the boolean value. The return value has been removed
// as it's typically not needed for a setter and it was merely echoing the input value.
func (a *AtomicBool) Set(newState bool) {
	atomic.StoreInt32(&a.state, boolToInt32(newState))
}