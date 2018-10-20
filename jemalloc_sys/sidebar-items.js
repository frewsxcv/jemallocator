initSidebarItems({"constant":[["MALLOCX_ZERO","Initialize newly allocated memory to contain zero bytes."]],"fn":[["MALLOCX_ALIGN","Align the memory allocation to start at an address that is a multiple of `align`, where a is a power of two."],["MALLOCX_ARENA","Use the arena specified by the index `a`."],["MALLOCX_LG_ALIGN","Align the memory allocation to start at an address that is a multiple of `1 << la`."],["MALLOCX_TCACHE","Use the thread-specific cache (tcache) specified by the identifier `tc`."],["MALLOCX_TCACHE_NONE","Do not use a thread-specific cache (tcache)."],["aligned_alloc","Allocates `size` bytes of memory at an address which is a multiple of `alignment`."],["calloc","Allocates zero-initialized space for an array of `number` objects, each of whose size is `size`."],["dallocx","Deallocates previously-allocated memory region referenced by `ptr`."],["free","Deallocates previously-allocated memory region referenced by `ptr`."],["mallctl","General interface for introspecting the memory allocator, as well as setting modifiable parameters and triggering actions."],["mallctlbymib","Like [`mallctl`] but taking a `mib` as input instead of a name."],["mallctlnametomib","Translates a name to a “Management Information Base” (MIB) that can be passed repeatedly to [`mallctlbymib`]."],["malloc","Allocates `size` bytes of uninitialized memory."],["malloc_stats_print","Writes summary statistics via the `write_cb` callback function pointer and `cbopaque` data passed to `write_cb`, or [`malloc_message`] if `write_cb` is null."],["malloc_usable_size","Returns the real size of the previously-allocated memory region referenced by `ptr`."],["mallocx","Allocates at least `size` bytes of memory according to `flags`."],["nallocx","Returns the real size of the allocation that would result from a [`mallocx`] function call with the same arguments."],["posix_memalign","Allocates `size` bytes of memory at an address which is a multiple of `alignment` and is placed in `*ptr`."],["rallocx","Resizes the previously-allocated memory region referenced by `ptr` to be at least `size` bytes."],["realloc","Resizes the previously-allocated memory region referenced by `ptr` to `size` bytes."],["sallocx","Returns the real size of the previously-allocated memory region referenced by `ptr`."],["sdallocx","Deallocates previously-allocated memory region referenced by `ptr` with `size` hint."],["xallocx","Resizes the previously-allocated memory region referenced by `ptr` in place to be at least `size` bytes, returning the real size of the allocation."]],"static":[["malloc_message","Allows overriding the function which emits the text strings forming the errors and warnings if for some reason the `STDERR_FILENO` file descriptor is not suitable for this."]],"struct":[["extent_hooks_s","Extent lifetime management functions."]],"type":[["extent_alloc_t","Extent allocation function."],["extent_commit_t","Extent commit function."],["extent_dalloc_t","Extent deallocation function."],["extent_decommit_t","Extent decommit function."],["extent_destroy_t","Extent destruction function."],["extent_hooks_t","Extent lifetime management functions."],["extent_merge_t","Extent merge function."],["extent_purge_t","Extent purge function."],["extent_split_t","Extent split function."]]});