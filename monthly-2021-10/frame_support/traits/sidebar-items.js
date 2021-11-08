initSidebarItems({"constant":[["ON_RUNTIME_UPGRADE_PREFIX","Prefix to be used (optionally) for implementing [`OnRuntimeUpgradeHelpersExt::storage_key`]."],["STORAGE_VERSION_STORAGE_KEY_POSTFIX","The storage key postfix that is used to store the [`StorageVersion`] per pallet."]],"enum":[["BalanceStatus","Status of funds."],["Everything","A [`Contains`] implementation that contains every value."],["ExistenceRequirement","Simple boolean for whether an account needs to be kept in existence."],["Nothing","A [`Contains`] implementation that contains no value."],["SameOrOther","Return type used when we need to return one of two items, each of the opposite direction or sign, with one (`Same`) being of the same type as the `self` or primary argument of the function that returned it."],["SignedImbalance","Either a positive or a negative imbalance."]],"mod":[["schedule","Traits and associated utilities for scheduling dispatchables in FRAME."],["tokens","Traits for working with tokens and their associated datastructures."]],"struct":[["AsContains","Adapter struct for turning an `OrderedMembership` impl into a `Contains` impl."],["Backing","Some amount of backing from a group. The precise definition of what it means to “back” something is left flexible."],["CallMetadata","The function and pallet name of the Call."],["ClearFilterGuard","Guard type for clearing all pushed constraints from a `FilterStack` and reinstating them when dropped."],["ConstU32","Implement `Get<u32>` and `Get<Option<u32>>` using the given const."],["CrateVersion","The version of a crate."],["FilterStackGuard","Guard type for pushing a constraint to a `FilterStack` and popping when dropped."],["GetDefault","Implement Get by returning Default for any type that implements Default."],["IsInVec","Trivial utility for implementing `Contains`/`OrderedMembership` with a `Vec`."],["SaturatingCurrencyToVote","A naive implementation of `CurrencyConvert` that simply saturates all conversions."],["StorageInfo","Metadata about storage from the runtime."],["StorageMapShim","A shim for placing around a storage item in order to use it as a `StoredValue`. Ideally this wouldn’t be needed as `StorageValue`s should blanket implement `StoredValue`s, however this would break the ability to have custom impls of `StoredValue`. The other workaround is to implement it directly in the macro."],["StorageVersion","The storage version of a pallet."],["U128CurrencyToVote","An implementation of `CurrencyToVote` tailored for chain’s that have a balance type of u128."],["WithdrawReasons","Reasons for moving funds out of an account."],["WrapperOpaque","A wrapper for any type `T` which implement encode/decode in a way compatible with `Vec<u8>`."]],"trait":[["ChangeMembers","Trait for type that can handle incremental changes to a set of account IDs."],["Contains","A trait for querying whether a type can be said to “contain” a value."],["ContainsLengthBound","A trait for querying bound for the length of an implementation of `Contains`"],["CurrencyToVote","A trait similar to `Convert` to convert values from `B` an abstract balance type into u64 and back from u128. (This conversion is used in election and other places where complex calculation over balance type is needed)"],["DisabledValidators","Trait used to check whether a given validator is currently disabled and should not be participating in consensus (e.g. because they equivocated)."],["EnsureInherentsAreFirst","A trait to ensure the inherent are before non-inherent in a block."],["EnsureOrigin","Some sort of check on the origin is performed by this object."],["EstimateCallFee","Something that can estimate the fee of a (frame-based) call."],["EstimateNextNewSession","Something that can estimate at which block scheduling of the next session will happen (i.e when we will try to fetch new validators)."],["EstimateNextSessionRotation","Something that can estimate at which block the next session rotation will happen (i.e. a new session starts)."],["ExecuteBlock","Something that can execute a given block."],["ExtrinsicCall","An extrinsic on which we can get access to call."],["Filter",""],["FilterStack","Trait to add a constraint onto the filter."],["FindAuthor","A trait for finding the author of a block header based on the `PreRuntime` digests contained within it."],["GenesisBuild","A trait to define the build function of a genesis config, T and I are placeholder for pallet trait and pallet instance."],["Get","A trait for querying a single value from a type."],["GetBacking","Retrieve the backing from an object’s ref."],["GetCallMetadata","Gets the metadata for the Call - function name and pallet name."],["GetCallName","Gets the function name of the Call."],["GetStorageVersion","Provides information about the storage version of a pallet."],["HandleLifetime","A simple, generic one-parameter event notifier/handler."],["Hooks","The pallet hooks trait. Implementing this lets you express some logic to execute."],["InitializeMembers","Trait for type that can handle the initialization of account IDs at genesis."],["Instance","An instance of a pallet in the storage."],["InstanceFilter","Simple trait for providing a filter over a reference to some type, given an instance of itself."],["IntegrityTest","Type that provide some integrity tests."],["IsSubType","Something that can be checked to be a of sub type `T`."],["IsType","Trait to be used when types are exactly same."],["KeyOwnerProofSystem","Something which can compute and check proofs of a historical key owner and return full identification data of that key owner."],["Lateness","Trait to be used by block producing consensus engine modules to determine how late the current block is (e.g. in a slot-based proposal mechanism how many slots were skipped since the previous block)."],["Len","Anything that can have a `::len()` method."],["LockableCurrency","A currency whose accounts can have liquidity restrictions."],["NamedReservableCurrency",""],["OffchainWorker","Off-chain computation trait."],["OnFinalize","The block finalization trait."],["OnGenesis","A trait that will be called at genesis."],["OnIdle","The block’s on idle trait."],["OnInitialize","The block initialization trait."],["OnKilledAccount","The account with the given id was reaped."],["OnNewAccount","Handler for when a new account has been created."],["OnRuntimeUpgrade","The runtime upgrade trait."],["OnRuntimeUpgradeHelpersExt","Some helper functions for [`OnRuntimeUpgrade`] during `try-runtime` testing."],["OnTimestampSet","A trait which is called when the timestamp is set in the runtime."],["OnUnbalanced","Handler for when some currency “account” decreased in balance for some reason."],["OneSessionHandler","A session handler for specific key type."],["OriginTrait","Methods available on `frame_system::Config::Origin`."],["PalletInfo","Provides information about the pallet itself and its setup in the runtime."],["PalletInfoAccess","Provides information about the pallet itself and its setup in the runtime."],["PartialStorageInfoTrait","Similar to [`StorageInfoTrait`], a trait to give partial information about storage."],["Randomness","A trait that is able to provide randomness."],["ReservableCurrency","A currency where funds can be reserved from the user."],["SortedMembers","A trait for a set which can enumerate its members in order."],["StorageInfoTrait","A trait to give information about storage."],["StorageInstance","An instance of a storage in a pallet."],["StoredMap","An abstraction of a value stored within storage, but possibly as part of a larger composite item."],["Time",""],["TryDrop","A type for which some values make sense to be able to drop without further consideration."],["UnfilteredDispatchable","Type that can be dispatched with an origin but without checking the origin filter."],["UnixTime","Trait to deal with unix time."],["ValidatorRegistration","Implementors of this trait provide information about whether or not some validator has been registered with them. The Session module is an implementor."],["ValidatorSet","A trait for online node inspection in a session."],["ValidatorSetWithIdentification","[`ValidatorSet`] combined with an identification."],["VerifySeal","A trait for verifying the seal of a header and returning the author."],["VestingSchedule","A vesting schedule over a currency. This allows a particular currency to have vesting limits applied to it."]],"type":[["AllowAll",""],["DenyAll",""],["LockIdentifier","An identifier for a lock. Used for disambiguating different locks so that they can be individually replaced or removed."]]});